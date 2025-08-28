// utils/navigation.ts
export function beforeNavigate() {
    window.dispatchEvent(new CustomEvent('beforeNavigate'));
  }
  
  export function navigateComplete() {
    window.dispatchEvent(new CustomEvent('navigateComplete'));
  }