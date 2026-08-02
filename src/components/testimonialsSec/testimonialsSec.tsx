import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TitleComponent from '../titleComponent/titleComponent';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { TESTIMONIALS } from '../../Data';

export default function TestimonialsSec() {
    const onAutoplayTimeLeft = (s: any, _time: number, progress: number) => {
        if (s.el) {
            s.el.style.setProperty('--slide-progress', `${(1 - progress) * 100}%`);
        }
    };

    return (
        <section id="testimonials" className="section-pad bg-black/90 relative overflow-hidden">
            <div className="orb-primary w-96 h-96 top-[-15%] right-[-5%] opacity-10" />
            <div className="orb-accent w-64 h-64 bottom-[-5%] left-[10%] opacity-10" />

            <div className="container">
                <div className='relative z-10'>
                    <div className="flex flex-col items-center text-center gap-4 mb-12">
                        <TitleComponent size="small-semibold" className="text-primary uppercase">Testimonials</TitleComponent>
                        <h2 className="heading-h2 max-w-2xl">
                            <span className="text-surface">Voices of </span>
                            <span className="text-surface/40">Satisfaction</span>
                        </h2>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        speed={3000}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                    >
                        {TESTIMONIALS.map((t) => (
                            <SwiperSlide key={t.id} className='glass-card-inset rounded-3xl bg-white/[0.03] border border-white/8 px-8 py-10 lg:px-14 lg:py-14 flex flex-col gap-10 overflow-hidden'>
                                <div
                                    className="progress-fill absolute inset-0 bg-white/5 pointer-events-none z-0 origin-left duration-100 ease-linear"
                                    style={{ width: 'var(--slide-progress, 0%)' }}
                                />
                                <p className="heading-h5 font-semibold text-surface leading-snug mb-5">
                                    "{t.quote}"
                                </p>
                                <div className="flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-start to-primary-end">
                                            <img
                                                src={t.avatar}
                                                alt={t.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold text-surface">{t.name}</p>
                                            <p className="text-sm text-surface/50">{t.role}</p>
                                        </div>
                                    </div>

                                    <span className="gradient-text-primary text-lg font-bold">
                                        {t.company}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}