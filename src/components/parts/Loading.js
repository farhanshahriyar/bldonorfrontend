import React from 'react';

const Loading = () => {
    return (
        <div style={{ minHeight: '600px' }} className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;