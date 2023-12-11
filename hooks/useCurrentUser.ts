import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    // SWR is similar to React Query, use this hook but won't fetch again if the 'data' already exists

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;