import React from 'react'
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import Button from '../utilities/Button'


const FormContato = () => {
  return (
    <form action="" className='mt-2'>
      <div className='mt-2'>
        <label className='font-semibold text-2xl' htmlFor="assunto">Assunto:</label>
        <Input className='font-medium' id='assunto' type="text" placeholder="Assunto" />
      </div>

      <div className='mt-2'>
        <label className='font-semibold text-2xl' htmlFor="message">Mensagem:</label>
        <Textarea className='font-medium' id='message' placeholder="Mensagem" />
      </div>

      <Button text={'Enviar'} />
    </form>
  )
}

export default FormContato