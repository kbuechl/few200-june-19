export class CommunicationsService {
  private message = 'default';

  getMessage() {
    return this.message;
  }
  setMessage(newMessage: string) {
    this.message = newMessage;
  }
}
