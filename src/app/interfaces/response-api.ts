
// Se importa de la interface de character para comunicarse y dar uso en esta interface.
import { Character } from "./character";

export interface ResponseApi 
{
    info: any;
    results: Character[];
}
