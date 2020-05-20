export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1000, 'Недопустимый тип приведения');
    this.errors.set(1001, 'Ошибка чтения данных');
    this.errors.set(2006, 'Ошибка недопустимого формата');
    this.errors.set(2007, 'Недопустимый объект данных');
    this.errors.set(2008, 'Ошибка записи данных');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
