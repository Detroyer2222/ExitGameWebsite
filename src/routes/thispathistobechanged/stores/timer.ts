import { browser } from "$app/env";
import { writable } from "svelte/store";

const storedTimer = () => 
{
    if(browser)
    {
        return localStorage.getItem("number");
    }

    return null;
};
export const timer = writable(parseInt(storedTimer !== null ? JSON.parse(storedTimer.toString()) : "0"));

timer.subscribe(value => 
{
    if(browser)
    {
        if(value === null)
        {
            localStorage.setItem("timer", JSON.stringify(Number(0)));
        }
        else
        {
            localStorage.setItem("timer", JSON.stringify(value));
        }
    }
});
