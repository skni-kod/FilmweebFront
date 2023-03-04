import { Card } from "../interfaces/Card";
import { SLIDER_MOVIES } from "../mocks/mocks";
export const getCards = (): Card[] => {
    return SLIDER_MOVIES;
};
