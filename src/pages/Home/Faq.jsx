
import Lottie from 'lottie-react';
import faqImage from '../../../public/faq-2.json'
const Faq = () => {
    return (
        <div>
            <div>
                <h1 className=' text-6xl font-bold text-center my-24'>Frequently Asked Questions</h1>
            </div>
            <div className="hero mb-24 font-Lato text-sky-600">
                <div className="hero-content flex justify-between flex-col lg:flex-row gap-4 p-6 rounded-lg border-2 mt-2 w-full">
                    <div>
                        <Lottie animationData={faqImage} className='h-96 w-96 rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-3/5'>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Can I order online?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can order through our website and choose home delivery or in-store pickup.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">What payment methods do you accept?
                            </div>
                            <div className="collapse-content">
                                <p>We accept credit/debit cards, PayPal, and cash for in-store purchases.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Do you have sales or discounts?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we frequently run promotions. Sign up for our newsletter to stay updated on upcoming sales.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Do you have sales or discounts?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we frequently run promotions. Sign up for our newsletter to stay updated on upcoming sales.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">What is your return policy?
                            </div>
                            <div className="collapse-content">
                                <p>We accept returns within 30 days of purchase if the item is unused and in its original packaging. Some restrictions apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;