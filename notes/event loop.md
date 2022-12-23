# Phases of the event loop
1. Timers
    - Execute callbacks set by setTimeout() and setInterval()
2. Pending callbacks
    - Execute I/O operations deferred to the next loop iteration
3. Idle, prepare
    - used internally
4. Poll
    - retrieve new I/O events
    - execute I/O related callbacks (except for close callbacks, callbacks set by timers and the ones set by setImemdiate()); node will block when appropriate
    - it has two phases:
        1. Calculate how long it should block and poll for I/O
        2. Process events in the poll queue
5. Check
    - execute setImmediate() callbacks
6. Close callbacks
    - execute close callbacks (ex: socket.on('close', ...))



## Notes
    - Each loop goes through several phases. Each phase executes specific callbacks.
    - setImmediate vs setTimeout
        - setImmediate(): executes a script once the current "poll" phase completes
        - setTimeout(): ** schedules ** a script to be run after a minimum threshold in ms has elapsed
        - setImmediate() will always be executed before any timers ** if scheduled within an I/O cycle ** (ex. callback for an I/O operation such as readFile), no matter how many timers are present; However, if setImmediate is used outside an I/O cycle and there are other timers, the order of execution is non-deterministic 
    
"process.nextTick()" fires immediately on the same phase
"setImmediate()" fires on the following iteration or 'tick' of the event loop

In essence, the names should be swapped. process.nextTick() fires more immediately than setImmediate(), but this is an artifact of the past which is unlikely to change. Making this switch would break a large percentage of the packages on npm. Every day more new modules are being added, which means every day we wait, more potential breakages occur. While they are confusing, the names themselves won't change.

> We recommend developers use setImmediate() in all cases because it's easier to reason about.


Node.js has two types of threads: one Event Loop and k Workers. The Event Loop is responsible for JavaScript callbacks and non-blocking I/O, and a Worker executes tasks corresponding to C++ code that completes an asynchronous request, including blocking I/O and CPU-intensive work. Both types of threads work on no more than one activity at a time. If any callback or task takes a long time, the thread running it becomes blocked. If your application makes blocking callbacks or tasks, this can lead to degraded throughput (clients/second) at best, and complete denial of service at worst.


## References:
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
