import React from 'react';
import { UseRefExample } from './useRefExample';

export const Lesson2Context = React.createContext<ConfigLesson2>({ lang: 'en', themeColor: 'dark' });
export const Lesson2ContextProvider = Lesson2Context.Provider;
export const Lesson2ContextConsumer = Lesson2Context.Consumer;

const getContextData = (): ConfigLesson2 => {
    return {
        lang: 'ru',
        themeColor: 'white'
    }
};

const Lesson2 = (): any => {
    return (
        <>
            <Lesson2ContextProvider value={getContextData()}>
                <UseRefExample handleChange={onInputChange}></UseRefExample>
            </Lesson2ContextProvider>
        </>
    );
};

const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
}

export { Lesson2 };
