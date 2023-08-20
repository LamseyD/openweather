export interface IBaseModalProps {
  modalActive: boolean
}

export interface IBaseModalEmits {
  (e: 'close-modal'): void
}
