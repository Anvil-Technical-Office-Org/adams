import { useEffect, useState } from 'react'
import { Space } from '~/core/entities'
import SpaceUseCase from '~/core/usecases/space-use-case'
import SpaceRepository from '~/core/repositories/space-repository'
import SpaceDriver from '~/core/drivers/space-driver'

export const useSideDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const [spaces, setSpaces] = useState<Space[]>([])
  const getSpaces = async () => {
    const usecase = new SpaceUseCase(new SpaceRepository(new SpaceDriver()))
    const tmpSpaces = await usecase.getSpaces()
    if (!tmpSpaces) return
    console.log(tmpSpaces)
    setSpaces(tmpSpaces)
  }

  useEffect(() => {
    // スペース一覧取得
    getSpaces()
  }, [])

  return {
    isOpen,
    open,
    close,
    spaces,
  }
}
