const calculateTimeAgo = (date: Date) => {
    const diffMs = new Date().getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays} day(s) ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour(s) ago`;
    } else if (diffMins > 0) {
      return `${diffMins} mins ago`;
    } else {
      return 'Just now';
    }
  };

  export default calculateTimeAgo;