import ErrorRepositary from '../ErrorRepository';

test('Возвращает расшифровку ошибки', () => {
  const errorRepository = new ErrorRepositary();
  const answer = errorRepository.translate(1000);

  expect(answer).toBe('Недопустимый тип приведения');
});

test('Возвращает неизвестную ошибку', () => {
  const errorRepository = new ErrorRepositary();
  const answer = errorRepository.translate(2005);

  expect(answer).toBe('Unknown error');
});
