import { Injectable } from '@angular/core';

export type NumPadStateType = {
  [key: string]: any
};

@Injectable()
export class NumPadState {
    
    public _state: NumPadStateType = {
        "displayHeader": "Pushups",
        "displayText": "1234.5",
        "period": {
            "unit": "Week",
            "index": "1"
        },
        "done": 0,
        "goal": 200,
        "point": true //flag to track if a point has been entered
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
    
    
    public backspace(oldValue : string, point : boolean){
        let last = oldValue.slice(-1);
        let newValue = oldValue.slice(0, -1);
        let newPoint = last === '.' ? false : point;
        newValue = newValue.length === 0 ? '0' : newValue;
        return {newValue: newValue, newPoint: newPoint}
    }

    
    private _clone(object: NumPadStateType) {
        /**
         * Simple object clone.
         */
        return JSON.parse(JSON.stringify( object ));
    }
}