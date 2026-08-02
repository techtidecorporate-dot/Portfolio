import { useEffect, useRef, useState } from 'react';

interface Stat {
    value: number;
    suffix: string;
    label: string;
    color: string;
    placeholder?: boolean;
}

const STATS: Stat[] = [
    {
        value: 4,
        suffix: '+',
        label: 'Years Experience',
        color: 'from-primary-start to-primary-end',
    },
    {
        value: 50,
        suffix: '+',
        label: 'Projects Completed',
        color: 'from-primary-start to-primary-end',
    },
    {
        value: 20,
        suffix: '+',
        label: 'Technologies',
        color: 'from-primary-start to-primary-end',
        placeholder: true,
    },
    {
        value: 15,
        suffix: '+',
        label: 'Happy Clients',
        color: 'from-primary-start to-primary-end',
        placeholder: true,
    },
];

function useCountUp(target: number, duration = 1500, trigger: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, trigger]);
    return count;
}

function StatCard({ stat, index, triggered }: { stat: Stat; index: number; triggered: boolean }) {
    const count = useCountUp(stat.value, 1200, triggered);

    return (
        <div
            className='flex flex-col items-center'
            style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'both' }}
        >
            <div className="flex items-end gap-1">
                <span className="heading-h2 gradient-text-primary font-extrabold leading-none">
                    {triggered ? count : 0}
                </span>
                <span className="heading-h3 gradient-text-primary font-extrabold leading-none mb-1">
                    {stat.suffix}
                </span>
            </div>

            <div>
                <p className="text-base font-semibold text-black/50 mt-1">
                    {stat.label}
                </p>
            </div>
        </div>
    );
}

export default function StatsSec() {
    const ref = useRef<HTMLDivElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTriggered(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-10 bg-black/5 relative overflow-hidden">
            <div className="container relative z-10" ref={ref}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STATS.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} triggered={triggered} />
                    ))}
                </div>
            </div>
        </section>
    );
}
