'use client';
import { animationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { sleep } from '../../lib/sleep';

const list = {
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export function AnimatedTitle() {
  const artificial = useAnimationControls();
  const intelligence = useAnimationControls();
  const engineer = useAnimationControls();
  const data = useAnimationControls();
  const scientist = useAnimationControls();
  const machine = useAnimationControls();
  const deep = useAnimationControls();
  const learning = useAnimationControls();
  const llm = useAnimationControls();
  const cloud = useAnimationControls();
  const x1 = useAnimationControls();
  const x2 = useAnimationControls();

  useEffect(() => {
    let hasCanceled_ = false;
    const animationActions = [
      { controller: artificial, value: 'visible' },
      { controller: intelligence, value: 'visible' },
      { controller: engineer, value: 'visible' },
      { controller: engineer, value: 1000 },
      { controller: engineer, value: 'hidden' },
      { controller: intelligence, value: 'hidden' },
      { controller: artificial, value: 'hidden' },
      
      
      { controller: data, value: 'visible' },
      { controller: scientist, value: 'visible' },
      { controller: scientist, value: 1000 },
      { controller: scientist, value: 'hidden' },
      { controller: data, value: 'hidden' },

      { controller: machine, value: 'visible' },
      { controller: learning, value: 'visible' },
      { controller: engineer, value: 'visible' },
      { controller: engineer, value: 1000 },
      { controller: engineer, value: 'hidden' },
      { controller: learning, value: 'hidden' },
      { controller: machine, value: 'hidden' },

      { controller: deep, value: 'visible' },
      { controller: learning, value: 'visible' },
      { controller: x1, value: 'visible' },
      { controller: cloud, value: 'visible' },
      { controller: x2, value: 'visible' },
      { controller: llm, value: 'visible' },
      { controller: llm, value: 1000 },
      { controller: llm, value: 'hidden' },
      { controller: x2, value: 'hidden' },
      { controller: cloud, value: 'hidden' },
       { controller: x1, value: 'hidden' },
      { controller: learning, value: 'hidden' },
      { controller: deep, value: 'hidden' },
    ];

    const animateWords = async () => {
      for (const action of animationActions) {
        if (hasCanceled_) {
          return;
        }
        if (typeof action.value === 'number') {
          await sleep(action.value);
        } else if (!hasCanceled_) {
          await action.controller.start(action.value);
        }
      }
      animateWords();
    };
    animateWords();
    return () => {
      hasCanceled_ = true;
    };
  }, [
    artificial,
    intelligence,
    engineer,
    data,
    scientist,
    machine,
    deep,
    learning,
    llm,
    cloud,
    x1,
    x2, 
  ]);

  return (
    <div className="flex text-blue-600">
       <motion.div variants={list} initial="hidden" animate={data}>
        <WriteWord word="Data" />
      </motion.div>

      <motion.div variants={list} initial="hidden" animate={artificial}>
        <WriteWord word="Artificial" />
      </motion.div>

      <motion.div variants={list} initial="hidden" animate={deep}>
        <WriteWord word="Deep" />
      </motion.div>
     
      
      <motion.div variants={list} initial="hidden" animate={machine}>
        <WriteWord word="Machine" />
      </motion.div>
      <div className="text-transparent">a</div>

      <motion.div variants={list} initial="hidden" animate={intelligence}>
        <WriteWord word="Intelligence" />
      </motion.div>
      
      <motion.div variants={list} initial="hidden" animate={learning}>
        <WriteWord word="Learning" />
      </motion.div>
      
      <motion.div variants={list} initial="hidden" animate={scientist}>
        <WriteWord word="Scientist" />
      </motion.div>

      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={engineer}>
        <WriteWord word="Engineer" />
      </motion.div>

      <motion.div variants={list} initial="hidden" animate={x1}>
        <WriteWord word="|" />
      </motion.div>
      
      <div className="text-transparent">a</div>
      
      
      <motion.div variants={list} initial="hidden" animate={cloud}>
        <WriteWord word="Cloud" />
      </motion.div>

      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={x2}>
        <WriteWord word="|" />
      </motion.div>

      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={llm}>
        <WriteWord word="LLM" />
      </motion.div>
      
      
      
    </div>
  );
}

const item = {
  hidden: { display: 'none', x: 0 },
  visible: { display: 'flex', x: 0 },
};

function WriteWord({ word, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return word.split('').map((letter, index) => (
    <motion.div key={index} variants={item} {...props}>
      {letter}
    </motion.div>
  ));
}