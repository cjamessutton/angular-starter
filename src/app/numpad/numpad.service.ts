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
        "point": false //flag to track if a point has been entered
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
    
    
    public backspace(oldText : string, point : boolean){
        let last = oldText.slice(-1);
        let newDisplayText = oldText.slice(0, -1);
        let newPoint = last === '.' ? false : point;
        newDisplayText = newDisplayText.length === 0 ? '0' : newDisplayText;
        return {newDisplayText: newDisplayText, newPoint: newPoint}
    }
    
    public type(oldText : string, newChar : string, point : boolean){
        let newDisplayText = oldText;
        let newPoint = point;
        if(oldText === '0' && oldText.length < 10 && /[0-9\.]/.test(newChar) ){
            if( newChar === '.'){
                 newDisplayText = oldText + '.';
                 newPoint = true;
            }
            else if( newChar !== '0') newDisplayText = newChar;
        } else if( oldText.length < 10 && /[0-9\.]/.test(newChar) ){
            if( newChar === '.' && !point ){
                newPoint = true;
                newDisplayText = oldText + '.';
            } else if( newChar !== '.' ){
                newDisplayText = oldText + newChar;
            }
        }
        
        return {newDisplayText: newDisplayText, newPoint: newPoint);
    }

    
    private _clone(object: NumPadStateType) {
        /**
         * Simple object clone.
         */
        return JSON.parse(JSON.stringify( object ));
    }
}