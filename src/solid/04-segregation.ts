interface Bird{
    eat(): void;
}

interface FlayingBird{
    fly(): number;
}

interface RuinningBird{
    run(): void;
}

interface SwimmergBird{
    swin(): void;
}


class Tucan implements Bird, FlayingBird{
    public fly(){return 100;}
    public eat(){}
}

class Humminbrid implements Bird, FlayingBird{
    public fly(){return 200}
    public eat(){}
}

class Ostrich implements Bird, RuinningBird{
    public eat(){}
    public run(){}

}

class Penguin implements Bird,SwimmergBird{
    public eat(){}
    public swin(){}
    
}
