export var isEmptyValidator = function isEmptyValidator(value) {
  return !value || value === '' ? 'Ops, não pode ser vazio.' : null;
};