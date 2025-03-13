function formatDates(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    } 
    
    const formattedDates = arr.map(date => {
        const parts = date.split("-");
        return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : null;
    }).filter(date => date !== null);
    
    console.log(formattedDates);
}
formatDates("abc");
formatDates([]);
formatDates(["2025-03-10", "2024-12-25", "2023-07-01"])