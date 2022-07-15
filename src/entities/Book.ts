class Book {
  private read: boolean = false;
  private startReadingDate: Date | null = null;
  private finishReadingDate: Date | null = null;
  constructor(readonly name: string, readonly author: string, readonly pages: number) {}

  startReading(startDate: Date) {
    this.read = false;
    this.startReadingDate = startDate;
  }

  finishReading(finishDate: Date): void {
    this.read = true;
    this.finishReadingDate = finishDate;
  }

  isRead(): boolean {
    return this.read;
  }

  getDaysReading(): number {
    // calculate number of days reading
    return 0;
  }

  getAveragePagePerDay(): number {
    return 0;
  }
}

export {
  Book
}