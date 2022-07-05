import BucketGirl from '../../assets/image/bucketgirl.png';

const Landing = () => {
    return (
        <>
            <div class="hero h-full lg:h-[60vh] bg-accent mt-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p
                            className='text-xl'
                            data-aos='fade-right'
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >Best Quality</p>
                        <h1
                            class="text-5xl font-bold"
                            data-aos='fade-right'
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >Professional Cleaning Service</h1>
                        <p
                            class="py-6 max-w-xl"
                            data-aos='fade-right'
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button data-aos='zoom-in-up' data-aos-delay="1000" class="btn btn-primary">Get Started</button>
                    </div>
                    <div
                        className='h-[60vh]'
                        data-aos='fade-left'
                        data-aos-duration="1000"
                        data-aos-delay="700"
                    >
                        <img src={BucketGirl} class="h-full shrink-0" alt='' />
                    </div>
                </div>
            </div>

            <div className='shadow-xl p-10 w-5/6 rounded-2xl mx-auto bg-base-200 relative z-20 mt-[-30px]'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;