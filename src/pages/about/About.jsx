import React from 'react';

function About() {
    return (
        <div className='py-10 px-3 md:px-10'>
            <h1 className='font-extrabold text-2xl my-3 '>How To use</h1>
            <div>
                Visit the homepage of your website.

                On the homepage, you will find an input field labeled "Enter the URL of the article or blog post."

                Copy the URL of the article or blog post you want to summarize from its source.

                Paste the URL into the input field on your website.

                Click on the 'ENTER button (or any equivalent action button) to initiate the summarization process.

                The website will retrieve the content from the provided URL and apply the summarization algorithm to generate a concise summary.

                Wait for a few moments while the summarization process takes place. You can display a loading spinner or progress indicator to keep the user informed.

                Once the summarization process is complete, the website will display the generated summary on the screen.

                Users can read the summary and get an overview of the article or blog post without reading the entire text.

                Optionally, you can provide additional features such as adjusting the length of the summary or providing options for customization.

                Users can repeat the process by entering the URL of another article or blog post to generate additional summaries.
            </div>
        </div>
    );
}

export default About;