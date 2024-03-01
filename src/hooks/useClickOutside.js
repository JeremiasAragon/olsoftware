import { useEffect, useRef } from "react"

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef(null)

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler()
        }
      }

      /* 
        Handle event in the capturing phase, by pasing to addEventListener/removeEventListener 
        functions a third argument with true. By default, the events are listened in the bubbling
        Phase (going up in the DOM tree) so by passing true to the addEventListener/removeEventListener
        we can listen an event on the capturing phase (going down in the DOM tree).
        This allows us to solve an issue when we try to open the modal:

        Whenever we click the button, the modal window will be attached to the DOM,
        then the event will bubble up 'til it reaches the modal window so then
        the click is detected outise the modal wich will inmediately close the modal
        again :v
      */
      document.addEventListener("click", handleClick, listenCapturing)
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing)
    },
    [handler, listenCapturing]
  )

  return { ref }
}
