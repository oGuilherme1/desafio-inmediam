import { Button } from '@inmediam/ui'
import { NavLink } from 'react-router-dom'

import NotFoundImage from '../assets/not-found.svg'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-background">
      <img
        src={NotFoundImage}
        alt="Ilustração indicando página não encontrada"
        className="mx-auto -mb-80 -mt-[19rem] w-[56rem]"
      />
      <h1 className="text-4xl/10 font-bold text-gray-900 dark:text-gray-100">
        Ops! Algo deu errado por aqui...
      </h1>
      <p className="mt-4 max-w-3xl text-center text-lg/7 font-normal text-gray-600 dark:text-gray-200">
        Experimente voltar ou recarregar a página. Se o problema persistir,
        tente novamente mais tarde ou entre em contato pelo suporte.
      </p>
      <NavLink to="/" className="mt-8">
        <Button size="lg" className="px-4 text-base/6 font-semibold">
          Voltar para a página inicial
        </Button>
      </NavLink>
    </div>
  )
}
