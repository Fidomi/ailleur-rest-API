/* eslint-disable no-undef */
import { createSetOfQuestions } from './';

describe('Function createSetOfQuestions', () => {
    test('Renvoie bien le set 0,1,2 pour la page 1', () => {
        const result = createSetOfQuestions(1);
        expect(result).toStrictEqual([0, 1, 2]);
    });

    test('Renvoie bien le set 3,4,5 pour la page 2', () => {
        const result = createSetOfQuestions(2);
        expect(result).toStrictEqual([3, 4, 5]);
    });

    test('Renvoie bien le set 6,7,8 pour la page 3', () => {
        const result = createSetOfQuestions(3);
        expect(result).toStrictEqual([6, 7, 8]);
    });

    test('Renvoie bien le set par défaut pour de mauvaises valeurs de page', () => {
        const result = createSetOfQuestions(4);
        expect(result).toStrictEqual([0, 1, 2]);
    });
});
