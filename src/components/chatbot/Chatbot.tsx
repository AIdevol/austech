import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  CHATBOT,
  CHATBOT_QUICK_REPLIES,
  type QuickReplyId,
} from '@/constants/chatbotContent'
import {
  createMessage,
  getBotReply,
  getQuickReplyMessage,
  type ChatMessage,
} from '@/lib/chatbot'

function MessageBubble({ message }: { message: ChatMessage }) {
  const isBot = message.role === 'bot'

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isBot
            ? 'rounded-bl-sm bg-white text-slate-700'
            : 'rounded-br-sm bg-royal text-white'
        }`}
      >
        <p className="whitespace-pre-line">{message.text}</p>
        {message.links && message.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.links.map((link) => {
              const isExternal =
                link.href.startsWith('http') ||
                link.href.startsWith('https://wa.me') ||
                link.href.startsWith('mailto:') ||
                link.href.startsWith('tel:')

              const className =
                'inline-flex rounded-sm border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold text-royal transition-colors hover:bg-gold hover:text-white'

              if (isExternal) {
                return (
                  <a key={link.label} href={link.href} className={className}>
                    {link.label}
                  </a>
                )
              }

              return (
                <Link key={link.label} to={link.href} className={className}>
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export function Chatbot() {
  const prefersReducedMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage('bot', { text: CHATBOT.welcome }),
  ])
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages])

  function replyBot(userText: string) {
    const botPayload = getBotReply(userText)
    setTimeout(() => {
      setMessages((prev) => [...prev, createMessage('bot', botPayload)])
    }, 400)
  }

  function sendUserMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, createMessage('user', { text: trimmed })])
    setInput('')
    replyBot(trimmed)
  }

  function handleQuickReply(id: QuickReplyId, label: string) {
    setMessages((prev) => [...prev, createMessage('user', { text: label })])
    setTimeout(() => {
      setMessages((prev) => [...prev, createMessage('bot', getQuickReplyMessage(id))])
    }, 400)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    sendUserMessage(input)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Austech chat assistant"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[60] flex w-auto max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-[0_12px_48px_rgba(10,31,68,0.2)] sm:inset-x-auto sm:bottom-28 sm:right-6 sm:w-[min(100vw-2rem,380px)]"
          >
            <header className="flex items-center justify-between gap-3 bg-navy px-4 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">{CHATBOT.name}</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/70">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  {CHATBOT.status}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div
              ref={listRef}
              className="flex max-h-[min(52vh,420px)] flex-col gap-3 overflow-y-auto bg-slate-100/80 px-3 py-4"
            >
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>

            <div className="border-t border-slate-200 bg-white px-3 py-2.5">
              <div className="mb-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CHATBOT_QUICK_REPLIES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuickReply(item.id, item.label)}
                    className="shrink-0 rounded-full border border-royal/20 bg-royal/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-royal transition-colors hover:border-gold hover:bg-gold/15"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={CHATBOT.placeholder}
                  className="min-h-[44px] flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm text-royal outline-none transition-colors placeholder:text-slate-400 focus:border-royal"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-[0_8px_24px_rgba(212,175,55,0.45)] transition-transform hover:scale-105 hover:bg-gold-dark sm:bottom-6 sm:right-6"
        aria-expanded={open}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  )
}
