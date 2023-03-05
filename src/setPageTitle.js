import { useEffect } from 'react';

function SetPageTitle(title) {
    //const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    // useEffect(
    //     () => () => {
    //         if (!prevailOnUnmount) {
    //             document.title = defaultTitle.current;
    //         }
    //     },
    //     []
    // );
}

export default SetPageTitle;