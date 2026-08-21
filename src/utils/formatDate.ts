export const formatDate = (noteDate: string) => {
    const date = new Date(noteDate)

    // Today
    const today = new Date();
    today.setHours(0, 0, 0, 0)

    //Yesturday
    const yesturday = new Date(today)
    yesturday.setDate(yesturday.getDate() - 1)
    yesturday.setHours(0, 0, 0, 0)


    // target noteDate
    const targetDate = new Date(date)
    targetDate.setHours(0, 0, 0, 0)

    if (targetDate.getTime() === today.getTime()) {
        return 'Today'
    }

    if (targetDate.getTime() === yesturday.getTime()) {
        return 'Yesterday'
    }

    return Intl.DateTimeFormat('en-IN', {
        month: 'short',
        day: 'numeric'
    }).format(date);
}