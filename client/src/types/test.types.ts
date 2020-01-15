export interface CreateTest {
    name: string;
    timer: number;
    cutOff: number;
}
export interface Test extends CreateTest {
    id: number;
}
