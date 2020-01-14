export interface TestInput {
    name: string;
    timer: number;
    cutoff: number;
}

export interface Test extends TestInput {
    id: number;
}
