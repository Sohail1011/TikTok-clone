import { FaFacebook } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6'
import { MdEmail, MdKey } from 'react-icons/md'

export function Form({ event }) {
    return (
        <article className="card absolute left-[50rem] top-[10rem] bg-neutral-900 w-96 shadow-2xl shadow-black p-5">
            <form className='flex flex-col gap-2'>
                <label className="input input-bordered flex items-center gap-2" htmlFor='email'>
                    <input type="email" maxLength={20} className="grow" placeholder="Email" />
                    <MdEmail size={25} />
                </label>
                <label className="input input-bordered flex items-center gap-2" htmlFor='password'>
                    <input type="password" maxLength={20} className="grow" placeholder="Password" />
                    <MdKey size={25} />
                </label>
                <div className="flex justify-center gap-5 my-2">
                    <button className='btn btn-error text-white w-[10rem] text-xl' type='submit'>Login</button>
                    <button className='btn w-[10rem] text-xl' onClick={event}>Cancel</button>
                </div>
                <button className='btn'><FaGoogle />Google</button>
                <button className='btn btn-info'><FaFacebook />Facebook</button>
                <button className='btn btn-success'>Register</button>
            </form>
        </article>
    )
}
