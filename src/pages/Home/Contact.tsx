import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle, XCircle, Mail, Clock, Users } from 'lucide-react'
import AnimatedSection from '../../components/ui/AnimatedSection'

type FormData = {
  name: string
  email: string
  organization?: string
  subject: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const schema = z.object({
    name: z.string().min(2, t('homeContact.validation.nameMin')),
    email: z.string().email(t('homeContact.validation.emailInvalid')),
    organization: z.string().optional(),
    subject: z.string().min(5, t('homeContact.validation.subjectMin')),
    message: z.string().min(20, t('homeContact.validation.messageMin')),
  })

  const contactInfo = [
    { icon: Mail, title: t('homeContact.info.email.title'), value: t('homeContact.info.email.value'), desc: t('homeContact.info.email.desc') },
    { icon: Clock, title: t('homeContact.info.responseTime.title'), value: t('homeContact.info.responseTime.value'), desc: t('homeContact.info.responseTime.desc') },
    { icon: Users, title: t('homeContact.info.supportFor.title'), value: t('homeContact.info.supportFor.value'), desc: t('homeContact.info.supportFor.desc') },
  ]

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      await emailjs.send(
        'service_wdql803',
        'template_b53bw4r',
        {
          from_name: data.name,
          from_email: data.email,
          organization: data.organization || 'Not provided',
          subject: data.subject,
          message: data.message,
        },
        'fjT0slD8w4ApHNLpA'
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-violet-500/30 ${hasError
      ? 'border-red-300 bg-red-50 focus:border-red-400'
      : 'border-slate-200 bg-white focus:border-violet-400'
    }`

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeContact.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            {t('homeContact.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            {t('homeContact.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimatedSection variant="slideLeft" className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('homeContact.form.successTitle')}</h3>
                    <p className="text-slate-500 mb-6">{t('homeContact.form.successSubtitle')}</p>
                    <button onClick={() => setStatus('idle')} className="px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors">
                      {t('homeContact.form.sendAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('homeContact.form.nameLabel')}</label>
                        <input {...register('name')} placeholder={t('homeContact.form.namePlaceholder')} className={inputClass(!!errors.name)} />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('homeContact.form.emailLabel')}</label>
                        <input {...register('email')} type="email" placeholder={t('homeContact.form.emailPlaceholder')} className={inputClass(!!errors.email)} />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('homeContact.form.organizationLabel')} <span className="text-slate-400">{t('homeContact.form.organizationOptional')}</span></label>
                      <input {...register('organization')} placeholder={t('homeContact.form.organizationPlaceholder')} className={inputClass(false)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('homeContact.form.subjectLabel')}</label>
                      <input {...register('subject')} placeholder={t('homeContact.form.subjectPlaceholder')} className={inputClass(!!errors.subject)} />
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('homeContact.form.messageLabel')}</label>
                      <textarea {...register('message')} rows={5} placeholder={t('homeContact.form.messagePlaceholder')} className={inputClass(!!errors.message)} />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                        <XCircle className="w-4 h-4 shrink-0" />
                        {t('homeContact.form.errorBanner')}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          {t('homeContact.form.submitting')}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t('homeContact.form.submitButton')}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection variant="slideRight" className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, value, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</p>
                    <p className="font-semibold text-slate-900 mt-0.5">{value}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">{t('homeContact.therapyCenterBanner.title')}</h3>
                <p className="text-sm text-violet-100 leading-relaxed">
                  {t('homeContact.therapyCenterBanner.description')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
