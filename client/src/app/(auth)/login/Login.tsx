'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Login() {

   const { register, handleSubmit, reset, formState: { errors } } = useForm<Record<string, string>>({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onSubmit'
	})

	const { push } = useRouter()

	const { mutate, error } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: Record<string, string>) => authService.login(data),
		onSuccess() {
			reset()
			push('/home')
		}
	})

	const onSubmit = (data: Record<string, string>) => {
      mutate(data)
   }

	return (
      <section className="auth">
         <div className="container">
            <form onSubmit={ handleSubmit(onSubmit) } className="auth__form">

               <div className="auth__header">
                  <h1 className="auth__title">Log In</h1>
                  { error && <p className='auth__error'>{ (error as any).response.data.message || 'Something went wrong!' }</p> }
               </div>

               <div className="auth__input">
                  <div className="auth__item">
                     <input type="email" {...register('email', { required: 'Indicate your email!' })} placeholder='E-mail' className="input" />
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
                  </div>
                  <p className="auth__error">{errors?.email?.message}</p>
               </div>

               <div className="auth__input">
                  <div className="auth__item">
                     <input type="password" {...register('password', { required: 'Indicate your password!' })} placeholder='Password' className="input" />
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" /></svg>
                  </div>
                  <p className="auth__error">{errors?.password?.message}</p>
               </div>

               <div className="auth__buttons">
                  <button type='submit' className='auth__btn btn btn_a'><span>Confirm</span></button>
                  <Link href='/register'>Don't have an account?</Link>
               </div>

            </form>
         </div>
      </section>
   )
}
