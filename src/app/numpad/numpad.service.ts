import { Injectable } from '@angular/core';

export type NumPadStateType = {
  [key: string]: any
};

@Injectable()
export class NumPadState {
    
    public _state: NumPadStateType = {
        "displayHeader": "Pushups",
        "displayText": "0",
        "period": {
            "unit": "Week",
            "index": "1"
        },
        "done": 0,
        "goal": 200,
        "point": false
    }
    
    public get state(){
        return this._clone(this._state);
    }
    /**
     * Never allow direct mutation
     */
    public set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }
    
    

    
    private _clone(object: NumPadStateType) {
        /**
         * Simple object clone.
         */
        return JSON.parse(JSON.stringify( object ));
    }
}