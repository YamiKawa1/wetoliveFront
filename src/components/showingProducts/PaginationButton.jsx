import React from 'react'

export default function PaginationButton() {
    return (
        <div className='container mt-4 pt-4 mb-4 position-relative'>
            <div className="btn-toolbar position-absolute top-50 start-50 translate-middle" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-secondary">1</button>
                    <button type="button" className="btn btn-secondary">2</button>
                    <button type="button" className="btn btn-secondary">3</button>
                    <button type="button" className="btn btn-secondary">4</button>
                    <button type="button" className="btn btn-secondary">5</button>
                    <button type="button" className="btn btn-secondary">6</button>
                    <button type="button" className="btn btn-secondary">7</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-info">...</button>
                </div>
            </div>
        </div>
    )
}
