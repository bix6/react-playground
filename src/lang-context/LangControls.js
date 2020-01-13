import React from 'react';
import LanguageContext from './LanguageContext';

export default function LangControls(props) {
    return (
        <LanguageContext.Consumer>
            {(value) => {
                return (
                    <>
                        <button
                            disabled={value.lang === 'en-GB'}>
                            British{' '}
                            <span role="img" aria-label="en-GB">GB</span>
                        </button>
                        {' '}
                        <button
                            disabled={value.lang === 'en-US'}>
                            American{' '}
                            <span role="img" aria-label="en-US">US</span>
                        </button>
                        {' '}
                        <button
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