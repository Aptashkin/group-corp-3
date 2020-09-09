import React, { useRef, useContext } from 'react';
import { Lesson2Context, Lesson2ContextConsumer } from './lesson2';

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UseRefExample = ({ handleChange }: Props): any => {
    const divRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCursorBtn = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        console.log([divRef, inputRef]);
    }

    const globalOptions = useContext(Lesson2Context);
    console.log([globalOptions.lang, globalOptions.themeColor]);

    return (
        <>
            <div ref={divRef}>Какой то текст</div>
            <input ref={inputRef} onChange={handleChange}/>
            <button onClick={handleCursorBtn}>Установить курсор в input</button>
            <br/><br/>
            <div>
                Данные из контекста:
                <span>
                    <Lesson2ContextConsumer>
                        {
                            globalOptions => globalOptions && (
                                <>
                                    <div>Lang: {globalOptions.lang}</div>
                                    <div>ThemeColor: {globalOptions.themeColor}</div>
                                </>
                            )
                        }
                    </Lesson2ContextConsumer>
                </span>
            </div>
        </>
    );
};

export { UseRefExample };
