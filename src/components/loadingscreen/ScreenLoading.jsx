import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import LoadingScreen from '../loading/LoadingScreen';

const ScreenLoading = () => {
    const { loading } = useStateContext();
    return (
        <div>
            {loading ? <LoadingScreen /> : ''}
        </div>
    )
}

export default ScreenLoading;