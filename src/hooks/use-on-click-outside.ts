import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      // если el пустой или содержит одинаковую ноду как в событии event (значит
      // пользователь кликнул по блоку к которому привязан ref)
      // то выходим из функции  и не закрываем  div  елемент
      if (!el || el.contains((event.target as Node) || null)) {
        return;
      }
      // иначе если не совпадают то
      // вызываем событие закрытия  блока ,
      // значит пользователь кликнул по другому блоке настранице
      // handler приходит снаружи привер прокидывания использования в компонентах :
      // useOnClickOutside(divRef, () => setIsShow(false))
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};
