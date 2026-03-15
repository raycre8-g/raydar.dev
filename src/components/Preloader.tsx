import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white font-outfit"
        >
          RAYDAR<span className="text-white/20">.</span>
        </motion.div>

        {/* Minimalist Loading Bar */}
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-full"
          />
        </div>

        {/* Status Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[9px] uppercase tracking-[0.8em] text-white/40 font-bold ml-[0.8em]"
        >
          Initializing
        </motion.div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
    </motion.div>
  )
}

export default Preloader
