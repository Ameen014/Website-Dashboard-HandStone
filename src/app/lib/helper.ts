"use client";

export const saveState = (state: { cart: any; auth: any }) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("appState", serializedState); 
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("appState");
      if (serializedState === null) {
        return undefined; 
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  