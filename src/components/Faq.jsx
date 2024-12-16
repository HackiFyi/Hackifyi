import React, { useState } from 'react';

function Faq() {
    const [visibleAnswers, setVisibleAnswers] = useState({
        rule1: false,
        rule2: false,
        rule3: false,
        rule4: false,
        rule5: false,
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false
    });

    const toggleVisibility = (key) => {
        setVisibleAnswers(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div id = "faq_and_rules" className='lg:flex'>
            <div className="lg:w-1/2 lg:ml-44">
                <p className="text-center font-semibold text-4xl mt-20">Rules</p>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule1')}>
                    <p className="text-lg font-normal font-n">What is the Team Size Limit?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule1 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Each team should consist of a maximum of 4 members or minimum of 3 members. Ensure that teams adhere to this limit.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule2')}>
                    <p className="text-lg font-normal">Project Submission Deadline</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule2 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        All projects must be submitted on time. The details about the announcement of the prizes will be provided later. Late submissions
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule3')}>
                    <p className="text-lg font-normal">Code of Conduct</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule3 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Participants must adhere to a respectful and inclusive code of conduct throughout the hackathon. Any form of harassment or
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule4')}>
                    <p className="text-lg font-normal">Original Work</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule4 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Projects must be original and developed during the hackathon period. Plagiarism or using pre-existing projects will result in
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule5')}>
                    <p className="text-lg font-normal">Demo Requirements:</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule5 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Teams must prepare a live demo of their project during the presentation. It should showcase the key features and functionalities.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>
            </div>

            <div className="lg:w-1/2 lg:mr-44">
                <p className="text-center font-semibold text-4xl mt-20">FAQ's</p>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq1')}>
                    <p className="text-lg font-normal">Can I participate alone, or do I need to be in a team?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq1 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        You can participate either in a team of 3 or 4 only.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq2')}>
                    <p className="text-lg font-normal">Are there any hardware or software limitations for the hackathon?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq2 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Yes, please refer to the rules for any specified hardware or software limitations. Ensure that your project is feasible within the provided
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq3')}>
                    <p className="text-lg font-normal">How do I prepare for the project presentation/demo?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq3 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Prepare a live demo showcasing key features and functionalities. Ensure your presentation is clear and concise, highlighting the aspects
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq4')}>
                    <p className="text-lg font-normal">What are the prizes for the winning projects?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq4 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Exciting prizes will be announced at a later date. For details, please refer to the rules or reach out to the organizers for more
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq5')}>
                    <p className="text-lg font-normal">What happens if I encounter issues or need technical support during the hackathon?</p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq5 && (
                    <p className="text-s font-SourceCodePro font-light mx-10 mt-10 animate-dropdown">
                        Organizers will provide technical support throughout the event. You can reach out to mentors or use designated communication
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10 mb-20"></hr>
            </div>
        </div>
    );
}

export default Faq;
