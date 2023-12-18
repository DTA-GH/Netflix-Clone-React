// SWR, (Stale-While-Revalidate) library for data fetching
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

// Used to fetch data from multiple parameters, (data, error, isLoading)
const useBillboard = () => {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;