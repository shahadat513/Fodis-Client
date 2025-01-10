
const Event = () => {
    return (
        <div>
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
                    <ul className="space-y-6">
                        {[
                            { date: "Jan 20, 2025", event: "Wine Tasting Night" },
                            { date: "Feb 14, 2025", event: "Valentine’s Day Special Dinner" },
                            { date: "Mar 10, 2025", event: "Live Jazz Night" },
                        ].map((event, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md">
                                <span className="text-gray-800 font-medium">{event.date}</span>
                                <span className="text-gray-600">{event.event}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Event;
