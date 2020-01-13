import React from 'react';
import LanguageContext from './LanguageContext';

export default function LangControls(props) {
    return (
        <LanguageContext.Consumer>
            {(value) => {
                console.log(value);
                console.log(value.contextValue);
                return (
                    <>
                        <button
                            onClick={() => props.onSetLang('en-GB')}
                            disabled={value.lang === 'en-GB'}>
                            British{' '}
                            <span role="img" aria-label="en-GB">GB</span>
                        </button>
                        {' '}
                        <button
                            onClick={() => props.onSetLang('en-US')}
                            disabled={value.contextValue.lang === 'en-US'}>
                            American{' '}
                            <span role="img" aria-label="en-US">US</span>
                        </button>
                        {' '}
                        <button
                            onClick={() => props.onSetLang('ko')}
                            disabled={value.lang === 'ko'}>
                            Korean{' '}
                            <span role="img" aria-label="ko">KR</span>
                        </button>
                    </>
                );
            }}
        </LanguageContext.Consumer>
    );
}