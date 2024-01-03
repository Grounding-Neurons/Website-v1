'use client'
import { FormEvent, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

  const [state, handleSubmit] = useForm("xleqeerk");
  const [showError, setShowError] = useState(false);

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity()) {
      setShowError(true);
      return;
    }
    setShowError(false);

    console.log("Form submitted!")
    await handleSubmit(e);
  };

  return (
    <div className="isolate bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold font-librecaslontext tracking-tighter sm:tracking-tight text-red-600 sm:text-4xl slide-animation-medium">Let's get in touch!</h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 font-librecaslontext">
          Have a question, inquiry, or proposal? Please complete the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmission} className="mx-auto mt-16 max-w-xl sm:mt-20 font-inter">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First Name<span className='text-red-600'> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text" name="first-name" id="first-name" autoComplete="given-name" required={true}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last Name<span className='text-red-600'> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text" name="last-name" id="last-name" autoComplete="family-name" required={true}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company (if applicable)
            </label>
            <div className="mt-2.5">
              <input
                type="text" name="company" id="company" autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6"
                placeholder='Ex: Grounding Neurons'
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email<span className='text-red-600'> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="email" name="email" id="email" autoComplete="email" required={true}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6"
                placeholder='you@example.com'
              />
            </div>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message<span className='text-red-600'> *</span>
            </label>
            <div className="mt-2.5">
              <textarea
                name="message" id="message" rows={4} required={true}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6"
                placeholder='Your message...'
              />
            </div>
          </div>
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <div className="g-recaptcha my-8" data-sitekey="6LchVUApAAAAAPOJ1Plh_LSUXYQG3DCQwffMVqac"/>
        <div className="mt-6">
          {showError && (
            <div className='text-center text-red-500 p-2 mt-2 text-sm'>
              Please complete the reCAPTCHA challenge.
            </div>
          )}
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-orange-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Submit
          </button>
          <div className='flex flex-col pt-4 text-xs text-gray-400 text-center'>
            <span>Grounding Neurons strongly values your privacy.</span>
            <span>We do not sell, share, or market the information entered above.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;