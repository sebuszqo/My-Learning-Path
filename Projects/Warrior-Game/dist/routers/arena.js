var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";
import { ValidationError } from "../utils/errors";
import { fight } from "../utils/warriors-fight";
// making a 'arena' router
export const arenaRouter = Router();
arenaRouter
    // form to make a fight
    .get('/fight-form', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warriors = yield WarriorRecord.listAll();
    res.render("arena/fight-form", {
        warriors
    });
}))
    // post to start a fight
    .post('/fight', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { warrior1: warrior1Id, warrior2: warrior2Id } = req.body;
    const warrior1 = yield WarriorRecord.getOneWarrior(warrior1Id);
    const warrior2 = yield WarriorRecord.getOneWarrior(warrior2Id);
    // making validations !
    if (warrior1Id === warrior2Id) {
        throw new ValidationError("You have chosen the same warrior for the fight, he cannot fight himself!");
    }
    if (!warrior1 || !warrior2) {
        throw new ValidationError("We couldn't find opponent for fight, try again ");
    }
    const { log, winner } = fight(warrior1, warrior2);
    winner.wins++;
    yield winner.updateWins();
    // console.log(log)
    res.render("arena/fight", { log });
}));
//# sourceMappingURL=arena.js.map