export const isEmptyValidator = (value) => {
  return !value || value === '' ? 'Ops, não pode ser vazio.' : null
}
